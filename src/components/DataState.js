import React, {useState} from 'react';
import Select from 'react-select';

function DataState() {
	const states = [
		{ value: 'terengganu', label: 'terengganu' },
		{ value: 'sarawak', label: 'sarawak' },
		{ value: 'wilayah persekutuan', label: 'wilayah persekutuan' },
		{ value: 'selangor', label: 'selangor' },
		{ value: 'sabah', label: 'sabah' },
		{ value: 'perak', label: 'perak' },
		{ value: 'pulau pinang', label: 'pulau pinang' },
		{ value: 'perlis', label: 'perlis' },
		{ value: 'pahang', label: 'pahang' },
		{ value: 'negeri sembilan', label: 'negeri sembilan' },
		{ value: 'melaka', label: 'melaka' },
		{ value: 'kelantan', label: 'kelantan' },
		{ value: 'kedah', label: 'kedah' },
		{ value: 'johor', label: 'johor' },
	];

    const [selectedOption, setSelectedOption] = useState('');

	const handler = (e) => {
        setSelectedOption(e.value);
    };

	return (
		<div>
			<Select
				defaultValue={states[0]}
				onChange={handler}
				options={states}
			/>
		</div>
	);
}

export default DataState;
