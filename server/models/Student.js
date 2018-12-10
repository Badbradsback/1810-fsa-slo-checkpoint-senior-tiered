'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phase: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['junior', 'senior', null]]
    }
  },

});

Student.findByPhase = function(phase) {
  return this.findAll({
    where: {
      phase: phase
    }
  })
}

module.exports = Student;
