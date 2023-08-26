import { useParams } from 'react-router-dom'

const ErrorPage = (props) => {
    const prop = props;

    return (
        <>
        <div className="error">
           <p>Se ha producido un error</p>
           <p>{prop.mensaje}</p>
           <p>Error: {prop.error}</p>
        </div>
        </>
    )
}

export const Error = () => {
    const { errorNo } = useParams();

  return (
    <>
        { errorNo == "404" && <ErrorPage mensaje="Pagina No encontrada" error="404"/>}
    </>
  )
}
