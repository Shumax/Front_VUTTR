import toolRepository from '../services/api/tools';

export const getAllTools = (token) => {
	return (dispatch) => {
		toolRepository.getAll(token)
		.then(
			(response) => {
				dispatch({
					type: 'LOAD_TOOLS',
					payload: response,
				});
			}
		);
	};
};