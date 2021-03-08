import { useState } from 'react';
import './App.css';
import { TeamForm } from './components/Forms/TeamForm';
import { CanvasSurface } from './components/CanvasSurface';
import iconSrc from './res/images/novye_rezy.png';
import { TimeForm } from './components/Forms/TimeForm';

const App = () => {
    const downloadCanvas = () => {
        let canvas = document.querySelector('canvas');

        var resizedCanvas = document.createElement('canvas');
        var resizedContext = resizedCanvas.getContext('2d');
        resizedCanvas.height = '2436';
        resizedCanvas.width = '1896';
        resizedContext.drawImage(canvas, 0, 0, 1896, 2436);
        var link = resizedCanvas.toDataURL();

        var aDownloadLink = document.createElement('a');
        aDownloadLink.download = 'canvas_image.png';
        aDownloadLink.href = link;
        aDownloadLink.click();
    };

    const [team1, setTeam1] = useState({
        name: 'team1',
        players: [
            { name: 'player1' },
            { name: 'player2' },
            { name: 'player3' },
            { name: 'player4' },
        ],
        score: '0',
    });
    const [team2, setTeam2] = useState({
        name: 'team2',
        players: [
            { name: 'player1' },
            { name: 'player2' },
            { name: 'player3' },
            { name: 'player4' },
        ],
        score: '0',
    });
    const [team3, setTeam3] = useState({
        name: 'team3',
        players: [
            { name: 'player1' },
            { name: 'player2' },
            { name: 'player3' },
            { name: 'player4' },
        ],
        score: '0',
    });
    const [time, setTime] = useState('0:00');

    return (
        <div className='App'>
            <div className='form helf'>
                <div className='download'>
                    <button
                        onClick={() => {
                            downloadCanvas();
                        }}
                    >
                        Скачать картинку
                    </button>
                </div>

                <TeamForm onSubmit={setTeam1} team={team1} title={'Команда 1'} />
                <TeamForm onSubmit={setTeam2} team={team2} title={'Команда 2'} />
                <TeamForm onSubmit={setTeam3} team={team3} title={'Команда 3'} />
                <TimeForm onSubmit={setTime} time={time} title={'Время'} />
            </div>
            <div className='canvas helf'>
                <CanvasSurface
                    imgSrc={iconSrc}
                    team1={team1}
                    team2={team2}
                    team3={team3}
                    time={time}
                />
            </div>
        </div>
    );
};

export default App;
