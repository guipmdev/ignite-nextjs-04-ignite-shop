import { useRouter } from 'next/router'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem veniam aliquam ut ab ipsam ipsa illo nesciunt cupiditate sint voluptatum iusto aut, porro soluta cum consequatur odit, qui rerum.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}