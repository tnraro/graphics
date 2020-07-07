import styles from "../style/canvas-inspector.module.css";
const CanvasInspector = (props) => {
  const {deltaTime, model, textures} = props;

  return <div className={styles.container}>
    <span>{`deltaTime: ${deltaTime}ms`}</span>
    <span>{`vertices: ${model.vertices.length} | tries ${model.faces.length}`}</span>
    <span>{`textures: ${textures.length}`}</span>
  </div>;
}

export default CanvasInspector;