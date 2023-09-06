/** @type {import('next').NextConfig} */
const nextConfig = {
    async generateStaticParams() {
        const paths = {
            '/': {page: '/'}
        }
    },
    output: 'export'
}

module.exports = nextConfig
