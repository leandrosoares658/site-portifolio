export function Hero() {
  return (
    <section className="flex justify-between items-center px-20 mt-14 w-full max-w-[1440px] mx-auto">
      {/* Lado Esquerdo - Conteúdo */}
      <div className="flex flex-col gap-20 max-w-[631px]">
        <div className="flex flex-col gap-4">
          <span className="text-grayActive font-semibold text-[24px]">Olá, eu sou</span>
          <h1 className="text-[70px] leading-[84px] font-black bg-text-grad bg-clip-text text-transparent">
            Desenvolvo sites e sistemas que ajudam seu negócio a crescer
          </h1>
          <p className="text-grayDark font-bold text-[28px] leading-[34px]">
            Leandro Soares, desenvolvedor web. Crio sites, landing pages e sistemas eficientes...
          </p>
        </div>

        {/* Botão e Redes Sociais */}
        <div className="flex flex-col gap-6">
           <button className="bg-orange-grad w-[156px] h-[48px] rounded-lg font-bold text-white text-[20px]">
            Hire Me
          </button>
          
          <div className="flex gap-5 mt-4">
            {/* Exemplo de um ícone social */}
            <div className="w-10 h-10 rounded-full border border-grayDarker bg-white/5 flex items-center justify-center text-grayDark">
              IG
            </div>
            <div className="w-10 h-10 rounded-full border border-grayDarker bg-white/5 flex items-center justify-center text-grayDark">
              IN
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Imagem com Elipses */}
      <div className="relative w-[618px] h-[618px]">
        <div className="absolute inset-0 bg-white/5 rounded-full scale-100" />
        <div className="absolute inset-0 bg-white rounded-full scale-95 opacity-10" />
        <img 
          src="/sua-foto.png" 
          alt="Leandro" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-auto z-10"
        />
      </div>
    </section>
  );
}