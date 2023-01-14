package main

import (
	"encoding/json"
	"net"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("v1 of piperdaniel1 portfolio API"))
	})

	type QueryFen struct {
		Fen  string // FEN string from board
		Time int32  // Time in ms that the computer should think for
	}
	http.HandleFunc("/query/fen", func(w http.ResponseWriter, r *http.Request) {
		// Parse body into JSON
		var query QueryFen
		json.NewDecoder(r.Body).Decode(&query)

		print("/query/fen from " + r.RemoteAddr + " -> ")

		// Dial port 4321 and get response
		conn, err := net.Dial("tcp", "localhost:4321")
		if err != nil {
			// set error response
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 01")
			return
		}

		// Send a "init w {fen}" to the engine
		_, err = conn.Write([]byte("init w fen " + query.Fen))
		if err != nil {
			// set error response
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 02")
			return
		}

		// Read the response
		buf := make([]byte, 1024)
		_, err = conn.Read(buf)
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 03")
			return
		}

		// Make sure the response is "200 ok" in buf
		if string(buf[:6]) != "200 ok" {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 04")
			return
		}

		// refresh the connection
		conn.Close()

		// Redial port 4321 and get response
		conn, err = net.Dial("tcp", "localhost:4321")
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 05")
			return
		}

		// Send a "query {time in seconds}" to the engine
		_, err = conn.Write([]byte("query " + string(query.Time/1000)))
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 06")
			return
		}

		// Read the response (make sure to wait for a bit)
		conn.SetDeadline(time.Now().Add(5 * time.Second))
		n, err := conn.Read(buf)
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 07")
			return
		}

		// Send response back
		w.Write(buf[:n])

		println("200 OK (" + string(buf[:n]) + ")")
	})

	println("Server is running: http://localhost:8080")

	http.ListenAndServe(":8080", nil)
}
