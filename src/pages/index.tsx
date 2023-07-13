import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  padding: '4px 8px',
  border: 0,
  borderRadius: 8,

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
