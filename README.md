# Fluxo de Obras

Gestão de obras de pedra (bancadas, revestimentos, bases de duche, mesas) do orçamento à conclusão.

- **Gestão:** painel com o que está parado, à espera do cliente ou fora do prazo, etapas e agenda dos próximos 7 dias.
- **Produção:** peças para cortar com a ficha técnica de cada uma.
- **Montagem:** agenda de montagens com morada, contacto e ficha técnica.
- **Cliente:** estado do projeto e formulário para os detalhes em falta (pré-visualização).

Cada projeto só avança de etapa quando tem os detalhes obrigatórios dessa etapa.

## Demonstração

Este repositório é uma versão de demonstração, um site estático sem servidor. Abre com projetos de exemplo, e as alterações ficam guardadas apenas no navegador de quem a usa. O botão "Repor exemplos" volta ao início.

Links diretos para cada vista: `/#producao`, `/#montagem`, `/#cliente`.

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importar este repositório.
2. Framework preset: **Other**. Não é preciso comando de build.
3. Deploy.

## Ficheiros

- `index.html`: a aplicação.
- `demo.js`: projetos de exemplo, com datas relativas ao dia de hoje, e a leitura simulada de "Importar pedido".
- `fabrica.html`: vista 3D das instalações, feita a partir da imagem de satélite. Cada trabalho aparece na sua zona (showroom e escritório, cortes, produção especializada, montagem, concluídos), e os que precisam de atenção ficam na área "! Atenção" no pátio.
- `source/fluxo-de-obras.html`: a mesma aplicação na versão para o claude.ai (dados partilhados).
- `build.py`: gera o `index.html` a partir de `source/` (`python3 build.py`).
