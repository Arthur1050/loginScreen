import './SlideComents.css';

const comments : Array<{user: string; comment: string}> = [
    {
        user: 'Maria_Silva123',
        comment: 'Estou maravilhada com a variedade de produtos disponíveis neste site! Como uma empreendedora do dropshipping, é essencial ter acesso a fornecedores confiáveis e produtos de qualidade. Este site superou todas as minhas expectativas.'
    },
    {
        user: 'Ana_Santos89',
        comment: 'Este site é perfeito para as empreendedoras que desejam fazer dropshipping. A variedade de produtos é impressionante e sempre encontro algo para atender às demandas dos meus clientes.'
    },
    {
        user: 'Juliana_Oliveira',
        comment: 'O suporte ao cliente também é excelente e me ajudou em todas as minhas dúvidas. Recomendo este site de olhos fechados!'
    },
    {
        user: 'Luiza_Rodrigues22',
        comment: 'Como uma mulher empreendedora, encontrar um site de dropshipping confiável e com produtos de qualidade é essencial. Este site superou todas as minhas expectativas. Os produtos são incríveis e a plataforma é fácil de usar.'
    },
    {
        user: 'Beatriz_Costa',
        comment: 'Estou encantada com a qualidade dos produtos deste site! Como uma empreendedora do dropshipping, é essencial oferecer produtos de alto padrão aos meus clientes. Este site me proporciona exatamente isso.'
    },
    {
        user: 'Carolina_Machado',
        comment: 'Este site é a minha escolha número um para fazer dropshipping! A variedade de produtos é incrível e sempre encontro algo novo e exclusivo para oferecer aos meus clientes. A entrega é rápida e confiável, e a equipe de suporte é excepcional.'
    }
]

export default function SlideComents() {
    const commentCard = (comment: { user: string; comment: string; }, i: number) => {
        return (
            <div className="p-2 w-72 border border-violet-500/50 text-gray-100 bg-violet-500/70 rounded-lg">
                <div>
                    <img className="mr-2 w-7 h-7 rounded-full inline-block" src={'/src/assets/perfis/perfil'+(i+1)+'.jpg'} alt="" />
                    <span className="text-sm font-semibold">{comment.user}</span>
                </div>
                <p className="text-xs indent-3 mt-2 h-20 overflow-hidden">
                    {comment.comment}
                </p>
            </div>
        )
    };
    return (
        <div className='flex-auto py-1 relative'>
            <div className='flex'>
                <div className="carroflex flex gap-1 pr-1 h-full text-left">
                    {comments.map((comment, i) => (commentCard(comment, i)))}
                </div>
                <div className="carroflex2 flex gap-1 pr-1 h-full text-left">
                    {comments.map((comment, i) => (commentCard(comment, i)))}
                </div>
            </div>
        </div>
    )
}