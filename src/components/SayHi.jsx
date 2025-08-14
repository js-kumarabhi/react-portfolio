import React, { useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Slide
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Close } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SayHi = ({ openDialog, onClose }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', message: '' });

  const handleSend = () => {
    if (!name || !message) {
      setErrors({
        name: !name ? 'Name is required' : '',
        message: !message ? 'Message is required' : ''
      });
      return;
    }

    const fullMessage = `Hi, I'm ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const phoneNumber = '919123137855'; // Include country code

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setName('');
    setMessage('');
    onClose();
    setErrors({ name: '', message: '' });
  };

  const handleClose = () => {
    setName('');
    setMessage('');
    setErrors({ name: '', message: '' });
    onClose();
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="say-hi-dialog-title"
      aria-describedby="say-hi-dialog-description"
       slots={{
          transition: Transition,
        }}
        keepMounted
    >
      <IconButton sx={{ position: 'absolute', right: 8, top: 8 }} onClick={handleClose}>
        <Close />
      </IconButton>
      <DialogTitle id="say-hi-dialog-title">Say Hi, on WhatsApp</DialogTitle>
      <DialogContent>

        <TextField
        size='small'
          placeholder="Your Good Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          helperText={errors.name}
        />

        <TextField
          placeholder="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          helperText={errors.message}
        />

        <Button
          variant="contained"
          fullWidth
          disableElevation
          startIcon={<WhatsAppIcon />}
          color='primary'
          sx={{ mt: 2, textTransform: 'none' }}
          onClick={handleSend}
        >
          Send via WhatsApp
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SayHi;
