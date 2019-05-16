const mongoose = require('mongoose');
const Consultation = require('../models/Consultation');

const consultation = 'medical-manager-server';
mongoose.connect(`mongodb://localhost/${consultation}`);

const consultations = [
  {
    reason: 'Ferida',
    cid: 'aaaaaa',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff3',
    id_doctor: '5cdd6fd0120a696940f52be3',
  },
  {
    reason: 'Dor nos pé',
    cid: 'bbbb',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff2',
    id_doctor: '5cdd6fd0120a696940f52be2',
  },
  {
    reason: 'Dor de cabeça',
    cid: 'cccccc',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff1',
    id_doctor: '5cdd6fd0120a696940f52be1',
  },
  {
    reason: 'Dor de barriga',
    cid: 'dddddd',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff4',
    id_doctor: '5cdd6fd0120a696940f52be3',
  },
  {
    reason: 'Dor nas costas',
    cid: 'eeeeee',
    exam: 'raio-x',
    symptoms: 'dor e coceira',
    conduct: 'exame de sangue',
    date: '2019-06-02',
    hour: '08:00',
    id_patient: '5cdd70ac2ee7376c9aba2ff0',
    id_doctor: '5cdd6fd0120a696940f52be1',
  },
];

Consultation.create(consultations, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${consultations.length} consultations`);
  mongoose.connection.close();
});
