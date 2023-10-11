

export const TiposBasicos = () => {

    const nombre: string | number= 'Jorge'
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes: string[] = ['volar', 'super fuerza', 'invisibilidad', 'super resistencia'];

  return (
    <>
    <h3>Tipos Básicos</h3>
    { nombre }, { edad }, { (estaActivo) ? 'esta activo' : 'esta inactivo' }
    <br/>
    { poderes.join(', ') }

    </>
  )
}
