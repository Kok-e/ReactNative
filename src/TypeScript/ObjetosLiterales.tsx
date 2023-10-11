
interface Persona {
    nombreCompletos: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    CasaNo: number
}

export const ObjetosLiterales = () => {
    
    const persona: Persona = {
        nombreCompletos: 'Jorge',
        edad: 35 ,
        direccion: {
            pais: 'Chile',
            CasaNo: 14
        }
    }

  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
        { JSON.stringify( persona, null, 2 ) }
        </pre>
    </code>
    </>
  )
}
