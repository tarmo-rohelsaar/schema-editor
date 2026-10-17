// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html data-theme="dark" lang="en">
        <head>
          <title>UiComponent</title>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="dark light" name="color-scheme" />
          <link href="data:," rel="icon" />
          {assets}
        </head>
        <body>
          <div class="Layout" id="app">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
