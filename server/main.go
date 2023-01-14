package main

import (
	"encoding/json"
	"net"
	"net/http"
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

		// Dial port 4321 and get response
		conn, err := net.Dial("tcp", "localhost:4321")

		if err != nil {
			println(err.Error())
			return
		}

		// Send a "init w {fen}" to the engine
		conn.Write([]byte("init w fen " + query.Fen))

		// Read the response
		println("Reading response...")
		buf := make([]byte, 1024)
		n, err := conn.Read(buf)
		if err != nil {
			println(err.Error())
			return
		}

		println("Response: " + string(buf[:n]))
		// Make sure the response is "200 ok" in buf
		if string(buf[:6]) != "200 ok" {
			println("Error: " + string(buf[:n]))
			return
		}

		// refresh the connection
		conn.Close()

		// Dial port 4321 and get response
		conn, err = net.Dial("tcp", "localhost:4321")

		if err != nil {
			println(err.Error())
			return
		}

		// Send a "query {time in seconds}" to the engine
		conn.Write([]byte("query " + string(query.Time/1000)))

		println("Reading response...")
		// Read the response (make sure to wait for a bit)
		// conn.SetDeadline(time.Now().Add(5 * time.Second))
		n, err = conn.Read(buf)

		if err != nil {
			println(err.Error())
			return
		}

		println("Response: " + string(buf[:n]))

		// Send response back
		w.Write(buf[:n])
	})

	println("Server is running: http://localhost:8080")

	http.ListenAndServe(":8080", nil)
}
