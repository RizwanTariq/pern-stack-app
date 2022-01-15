import { Form, Button } from 'react-bootstrap'
function AppForm({ handleSubmit }) {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label className='mt-4'>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter users name...' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label className='mt-4'>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter users email address' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicAge'>
        <Form.Label className='mt-4'>Age</Form.Label>
        <Form.Control type='number' placeholder='Enter users age' min='10' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default AppForm
