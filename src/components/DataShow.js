import React, { useState } from 'react';

const DataShow = ({districts, selectedDistrict}) => {
	const [prayers, setListPrayer] = useState([]);

	function findPrayerTime() {
		const final_district = districts.find(
			(d) => d.nama === selectedDistrict
		);
		const prayer_times = final_district.waktu_solat;
		setListPrayer(prayer_times);
	}

	function clearPrayerTime() {
		setListPrayer([]);
	}

	return (
		<div>
			<div className='listDistric'>
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
			</div>
		</div>
	);
};

export default DataShow;
