import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class CustomizedDocument extends Document {
	// styled-components 的特殊設定
	// 可以參考官方的 example:
	// https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}	

export default CustomizedDocument;
