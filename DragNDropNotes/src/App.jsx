import NotesPage from "./Pages/NotesPage.jsx";
import NoteProvider from "./context/NoteContext.jsx";

function App() {
    return (
        <div id="app">
            <NoteProvider>
                <NotesPage />
            </NoteProvider>
        </div>
    );
}

export default App;
