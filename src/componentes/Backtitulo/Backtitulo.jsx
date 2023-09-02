import './backtitulo.css'

export const Backtitulo = (props) => {
    const prop = props;
    return (
    <div className="fondo-titulo">
      <h1 className="texto-titulo">{prop.texto}</h1>
    </div>
  );
};

