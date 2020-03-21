export const pingServer = async () => {
	return await fetch('https://titouan-sola-training-api.herokuapp.com/api/ping');
}