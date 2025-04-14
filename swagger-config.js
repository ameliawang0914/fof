window.onload = function() {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      urls: [
        { url: "./openapi/user-profile-service.yaml", name: "User Profile Service" },
      ],
      layout: "StandaloneLayout",
      presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset  // <- include this
    ]
    });
    window.ui = ui;
  };