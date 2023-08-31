package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

func stringToJSON(input string) (string, error) {
  pale := strings.ReplaceAll(input, "'\\''", "'")
	pairs := strings.Split(pale, ";")
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
	input := `Qhz='z$wB';iLz='phas';Kaz='z$PB';ygz='YGz$';uKz='e'\'';C';TYz=''\''pp_';yVz='erce';`
	jsonResult, err := stringToJSON(input)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(jsonResult)
}