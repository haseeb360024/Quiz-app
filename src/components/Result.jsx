
export default function Result({ countCorrectAnswers }) {
    return (
        <>
            <p style={{fontSize:'50px', color:'red'}}>
                You got <strong>{countCorrectAnswers}</strong> correct!
            </p>
            <p style={{fontSize:'30px'}}>Thank you for playing!</p>

        </>
    );
}

