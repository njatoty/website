import Blogcard from '@/components/ui/blog-card'

const BlogList = () => {
    return (
        <div className='w-full p-5 py-10'>
            <Blogcard href="/blog/react-solid-principle" className="w-full">
                <Blogcard.Title className="mb-3 text-lg font-bold text-c-dark3 dark:text-c-light">
                    <Blogcard.Number>1</Blogcard.Number> Appliquez les principes SOLID en React
                </Blogcard.Title>
                <Blogcard.Description>
                    Découvrez comment appliquer les principes SOLID en React avec des exemples concrets. Améliorez la structure de vos composants, facilitez la maintenance et optimisez la réutilisabilité de votre code grâce à ces bonnes pratiques de conception. 💡
                </Blogcard.Description>
                <Blogcard.Footer className='mt-3'>
                    <Blogcard.Estimation>15 minutes</Blogcard.Estimation>
                    <Blogcard.Date>07/14/2025</Blogcard.Date>
                </Blogcard.Footer>
            </Blogcard>
        </div>
    )
}

export default BlogList