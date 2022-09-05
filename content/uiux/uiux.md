---
title: "UiUx Design"
layout: uiux
draft: false
type: uiux
description: "DeScRiPtIoN"
---

<!DOCTYPE html>  
<html lang="{{ .Site.LanguageCode }}">  
    {{- partial "head.html" . -}}  
    <body>  
        {{- partial "header.html" . -}}  
        <main>  
        {{- block "main" . }}{{- end }}  
        </main>  
        {{- partial "footer.html" . -}}  
    </body>  
</html>
