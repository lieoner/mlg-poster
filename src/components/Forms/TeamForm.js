import React from 'react';

const useFormField = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = React.useCallback((e) => setValue(e.target.value), []);
    return { value, onChange };
};

export const TeamForm = ({ team, onSubmit, title }) => {
    const teamNameField = useFormField(team.name);
    const player1NameField = useFormField(team.players[0].name);
    const player2NameField = useFormField(team.players[1].name);
    const player3NameField = useFormField(team.players[2].name);
    const player4NameField = useFormField(team.players[3].name);
    const teamScoreField = useFormField(team.score);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            name: teamNameField.value,
            players: [
                { name: player1NameField.value },
                { name: player2NameField.value },
                { name: player3NameField.value },
                { name: player4NameField.value },
            ],
            score: teamScoreField.value,
        });
    };
    return (
        <form className={'team'} onSubmit={handleSubmit}>
            <label htmlFor='team'>{title} </label>
            <div>
                <label htmlFor='team'>Название </label>
                <input type='team' id='team' name='team' {...teamNameField} />
            </div>
            <div>
                <label htmlFor='player1'>Игрок 1 </label>
                <input type='player1' id='player1' name='player1' {...player1NameField} />
            </div>
            <div>
                <label htmlFor='player2'>Игрок 2 </label>
                <input type='player2' id='player2' name='player2' {...player2NameField} />
            </div>
            <div>
                <label htmlFor='player3'>Игрок 3 </label>
                <input type='player3' id='player3' name='player3' {...player3NameField} />
            </div>
            <div>
                <label htmlFor='player4'>Игрок 4 </label>
                <input type='player4' id='player4' name='player4' {...player4NameField} />
            </div>
            <div>
                <label htmlFor='score'>Кол-во очков </label>
                <input type='score' id='score' name='score' {...teamScoreField} />
            </div>

            <button>Изменить</button>
        </form>
    );
};
