package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

func stringTheocracy(input string) (string, error) {
	pairs := strings.Split(input, ";")
	result := make(map[string]string)

	for _, pair := range pairs {
		parts := strings.Split(pair, "=")
		if len(parts) == 2 {
			key := parts[0]
			value := parts[1]
			result[key] = value
		}
	}

	jsonData, err := json.MarshalIndent(result, "", "    ")
	if err != nil {
		return "", err
	}

	return string(jsonData), nil
}

func main() {
	input := "satu=ich;dua=ni;tiga=san;empat=fa;"
	jsonResult, err := stringTheocracy(input)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(jsonResult)
}