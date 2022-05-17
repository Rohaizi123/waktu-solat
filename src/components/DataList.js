import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import DataShow from "./DataShow";


function DataList({ selectedOption}) {
	//child component
	const [districts, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    // const [prayers, setListPrayer] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json`
			)
			.then((res) => {
				const states = res.data.data.negeri; //get all states from response

				const sortStates = states.find(function (e) { //sort state, get the actual from user select
					return e.nama === selectedOption;
				});

				const listDistricts = sortStates.zon; // filter zone by states, get the list of zon

				setDistrict(listDistricts);
			})
			.catch((err) => {
                console.log(err);
			});
        }, [selectedOption]);
        
    // console.log(selectedDistrict);
    
	const options = districts.map((district) => {
		return { label: district.nama, value: district.nama };
    });

    // function findPrayerTime() {
	// 	const final_district = districts.find((d) => d.nama === selectedDistrict);
	// 	const prayer_times = final_district.waktu_solat;
	// 	setListPrayer(prayer_times);
    // }
    
    // function clearPrayerTime() {
    //     setListPrayer([]);
    // }

	// console.log(prayers);

	return (
		<div>
			<Select
				options={options}
				onChange={(option) => setSelectedDistrict(option.value)}
				value={options.label}
            />
            <DataShow selectedDistrict={selectedDistrict} districts={districts}/>
			{/* <div className='listDistric'>
				<button onClick={findPrayerTime}>Cari</button>
				<button onClick={clearPrayerTime}>Reset</button>

				<tbody>
					<table>
						<tr>
							<th>Solat</th>
							<th>Waktu Solat</th>
						</tr>
						{prayers.map((prayer, index) => (
							<tr key={index}>
								<td>{prayer.name}</td>
								<td>{prayer.time}</td>
							</tr>
						))}
					</table>
				</tbody>
			</div> */}
		</div>
	);
}

export default DataList;
