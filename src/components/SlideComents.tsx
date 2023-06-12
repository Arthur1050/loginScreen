export default function SlideComents() {
    return (
        <div className="p-1 flex-auto">
            <div className="flex gap-1 h-full text-left">
                <div className="p-2 w-3/4 border border-violet-500/50 text-gray-100 bg-violet-500/70 rounded-lg">
                    <div>
                        <img className="mr-2 w-7 h-7 rounded-full inline-block" src="/src/assets/perfis/perfil1.jpg" alt="" />
                        <span className="text-sm font-semibold">Maria_Silva123</span>
                    </div>
                    <p className="text-xs indent-3 mt-2">
                        Estou maravilhada com a variedade de produtos disponíveis neste site! Como uma empreendedora do dropshipping, é essencial ter acesso a fornecedores confiáveis e produtos de qualidade. Este site superou todas as minhas expectativas.
                    </p>
                </div>
            </div>
        </div>
    )
}