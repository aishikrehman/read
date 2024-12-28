

        {{ $currentSection := .Section }} 
        {{ $currentSection }}


        {{/*  {{ $currentSection := .Section }} 
        {{ $localMenu := "" }} */}}

        {{ if eq .Section "discrete-mathematics"}}
            {{ $localMenu := "discrete-mathematics" }}
            {{ $localMenu }}
        {{ else }}
            {{ $localMenu := "local" }}
            {{ $localMenu }}
        {{ end}}

          {{/*{{ if eq $currentSection "discrete-mathematics" }}
            {{ $localMenu := "discreteMathematics" }}
        {{ else }}
            {{ $localMenu := "local" }}
        {{ end }}  */}}
        