package main

import (
	"fmt"

	"komla.com/greetings"
)

func main() {
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}
