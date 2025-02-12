import Blogcard from '@/components/ui/blog-card'

const BlogList = () => {
    return (
        <div className='w-full'>
            <Blogcard href="/blog/react-solid-principle" className="w-full">
                <Blogcard.Title className="mb-3 text-lg font-bold text-c-dark3 dark:text-c-light">
                    #1 - 🚀 Appliquez les principes SOLID en React : écrivez un code plus propre et maintenable.
                </Blogcard.Title>
                <Blogcard.Description className="line-clamp-3">
                    Découvrez comment appliquer les principes SOLID en React avec des exemples concrets. Améliorez la structure de vos composants, facilitez la maintenance et optimisez la réutilisabilité de votre code grâce à ces bonnes pratiques de conception. 💡
                </Blogcard.Description>
            </Blogcard>
        </div>
    )
}

export default BlogList