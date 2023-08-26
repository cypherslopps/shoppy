export default async function sitemap() {
	const routes = ['', '/cart', '/login', '/register', '/products'].map(route => ({
		url: `http://localhost:3000${route}`,
		lastModified: new Date().toISOString()
	}))

	return routes;
}