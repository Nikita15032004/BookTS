import React, { useState } from 'react';
//////////////////////////////////
function useInput(initValue: React.ChangeEvent) {

	const [value, setValue] = useState(initValue)
	const valueHandler = (e: any) => {
		setValue((prevValue: any) => e.target.value);
	}

	return [value, valueHandler];
}
export default useInput;