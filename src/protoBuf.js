import protobuf from 'protobufjs';
import path from 'path'; 
import { logger } from './logger.js';

const __dirname = path.resolve();

// load proto with sync
export const avpProto = protobuf.loadSync(path.join(__dirname, 'src', 'Avp.proto'));

export const version = avpProto.lookupType('keti.Version');
export const entity = avpProto.lookupType('keti.Entity');
export const envelope = avpProto.lookupType('keti.Envelope');
export const ids = avpProto.lookupType('keti.Ids');

export const avpVehicleParkingSensor = avpProto.lookupType('keti.AvpVehicleParkingSensor');
export const avpVehicleParkingSensors = avpProto.lookupType('keti.AvpVehicleParkingSensors');

export const avpVehicleSteeringSensor = avpProto.lookupType('keti.AvpVehicleSteeringSensor');
export const avpVehicleSteeringSensors = avpProto.lookupType('keti.AvpVehicleSteeringSensors');

export const avpVehicleEngineSensor = avpProto.lookupType('keti.AvpVehicleEngineSensor');
export const avpVehicleEngineSensors = avpProto.lookupType('keti.AvpVehicleEngineSensors');

export const avpVehicleStabilitySensor = avpProto.lookupType('keti.AvpVehicleStabilitySensor');
export const avpVehicleStabilitySensors = avpProto.lookupType('keti.AvpVehicleStabilitySensors');

export const avpVehicleDoorSensor = avpProto.lookupType('keti.AvpVehicleDoorSensor');
export const avpVehicleDoorSensors = avpProto.lookupType('keti.AvpVehicleDoorSensors');

export const avpDataMessage = avpProto.lookupType('keti.AvpDataMessage');
export const avpControlMessage = avpProto.lookupType('keti.AvpControlMessage');

export const avpMessage = avpProto.lookupType('keti.AvpMessage');

logger.info('version: ' + !!version);
logger.info('entity: ' + !!entity);
logger.info('envelope: ' + !!envelope);
logger.info('ids: ' + !!ids);

logger.info('avpVehicleParkingSensor: ' + !!avpVehicleParkingSensor);
logger.info('avpVehicleParkingSensors: ' + !!avpVehicleParkingSensors);

logger.info('avpVehicleSteeringSensor:' + !!avpVehicleSteeringSensor);
logger.info('avpVehicleSteeringSensors:' + !!avpVehicleSteeringSensors);

logger.info('avpVehicleEngineSensor: ' + !!avpVehicleEngineSensor);
logger.info('avpVehicleEngineSensors: ', !!avpVehicleEngineSensors);

logger.info('avpVehicleStabilitySensor: ' + !!avpVehicleStabilitySensor);
logger.info('avpVehicleStabilitySensors: ' + !!avpVehicleStabilitySensors);

logger.info('avpVehicleDoorSensor: ' + !!avpVehicleDoorSensor);
logger.info('avpVehicleDoorSensors: ' + !!avpVehicleDoorSensors);

logger.info('avpDataMessage: ' + !!avpDataMessage);
logger.info('avpControlMessage: ' + !!avpControlMessage);

logger.info('avpMessage: '+ !!avpMessage);

// const avpVehicleParkingSensor = avpProto.lookupType('keti.AvpVehicleParkingSensor');
// logger.info(avpVehicleParkingSensor);

// const avpVehicleParkingSensors = avpProto.lookupType('keti.AvpVehicleParkingSensors');
// logger.info(avpVehicleParkingSensors);