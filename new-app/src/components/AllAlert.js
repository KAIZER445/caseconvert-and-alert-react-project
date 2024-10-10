import Alert from 'react-bootstrap/Alert';

export default function AllAlert({alert}) {
    return (
      alert && <Alert variant={alert.type} dismissible>
        <p className='mb-0'>
          {alert.msg}
        </p>
      </Alert>
    );
}
