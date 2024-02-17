interface IndexPageData extends Lume.Data {
    title: string
}
export default (
    { title, children }: IndexPageData
) => (
    <html lang="ja">
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>セプタ's ポータル</title>
    <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
    <header>
    <h1>セプタ's ポータル</h1>
    </header>

    <main>
    <article>
        <h2>{ title }</h2>
        { children }
    </article>
    </main>

    <footer>
    <p>&copy; 2023 セプタ's ポータル</p>
    </footer>
    </body>
    </html>
)
