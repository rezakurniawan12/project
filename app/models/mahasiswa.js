import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nama: DS.attr('string'),
    jurusan: DS.attr('string'),
    nim: DS.attr('string')
});
