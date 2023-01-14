package main

import (
	"encoding/json"
	"net/http"
)

type QueryFen struct {
	Fen  string // FEN string from board
	Time int32  // Time that the computer should think
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World"))
	})
	http.HandleFunc("/query/fen", func(w http.ResponseWriter, r *http.Request) {
		// Parse body into JSON
		var query QueryFen
		json.NewDecoder(r.Body).Decode(&query)

		// Send it back
		w.Write([]byte(query.Fen))
	})

	println("Server is running: http://localhost:8080")

	http.ListenAndServe(":8080", nil)
}
