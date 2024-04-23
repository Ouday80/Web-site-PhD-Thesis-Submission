import React from 'react';

interface FormData {
    nom: string;
    preNom: string;
    cin: string;
    dateNaissance: string; 
    dateInscription: string; 
    genre: string;
    lieuNaissance: string;
    adresseMail: string;
    numTelephone: string;
}

interface Props {
  formData: FormData; 
}

const PostDoctorant: React.FC<Props> = ({ formData }) => {
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/Doctorant/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }; 

  handleSubmit();

  return null ;
  
};

export default PostDoctorant;
