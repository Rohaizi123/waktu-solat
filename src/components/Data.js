//parent
import React, { useState } from 'react';
import Select from 'react-select';
import DataList from './DataList';

const Data = () => {
	const states = [
		{ value: 'terengganu', label: 'Terengganu' },
		{ value: 'sarawak', label: 'Sarawak' },
		{ value: 'wilayah persekutuan', label: 'Wilayah Persekutuan' },
		{ value: 'selangor', label: 'Selangor' },
		{ value: 'sabah', label: 'Sabah' },
		{ value: 'perak', label: 'Perak' },
		{ value: 'pulau pinang', label: 'Pulau Pinang' },
		{ value: 'perlis', label: 'Perlis' },
		{ value: 'pahang', label: 'Pahang' },
		{ value: 'negeri sembilan', label: 'Negeri Sembilan' },
		{ value: 'melaka', label: 'Melaka' },
		{ value: 'kelantan', label: 'Kelantan' },
		{ value: 'kedah', label: 'Kedah' },
		{ value: 'johor', label: 'Johor' },
	];

    const [selectedOption, setSelectedOption] = useState('selangor');

    //data from parent to child
	const selectState = (e) => {
		setSelectedOption(e.value);
    };
    
	return (
		<div className='container'>
			<h1 className='header'>Waktu Solat</h1>
            <div className='select'>
				<div>
                    <h5>Pilih Negeri</h5>
                        <Select
                            defaultValue={{ label: 'selangor', value: 'selangor' }}
                            onChange={selectState}
                            options={states}
                        />
                    </div>
                <div>
                    <h5>Pilih Zon</h5>
					<DataList selectedOption={selectedOption} />
                </div>
			</div>
		</div>
	);
};

export default Data;
