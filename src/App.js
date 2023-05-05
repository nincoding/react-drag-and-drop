import './App.css';
import DropFileInput from './components/drop-file-input/DropFileInput';
import { listData } from './data/dummyData';
import DraggableList from './components/drop-list/DraggableList';
import Card from './components/card/Card';

function App() {

  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <>
    <div className="box">
      <h2 className='header'>
        React drop files input
      </h2>
      <DropFileInput 
        onFileChange={(files) => onFileChange(files)}
      />
    </div>
    <h1 className='header'>
      React drag and drop list
    </h1>
    <DraggableList 
      data={listData}
      renderItemContent={(item) => LessonCard(item)}
    />
    </>
  );
}

const LessonCard = item => <Card item={item} />

export default App;
