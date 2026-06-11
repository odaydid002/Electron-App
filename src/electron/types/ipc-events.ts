/**
 * IPC Event Payload Mapping
 * Centralized type definitions for all IPC communication
 * between main and renderer processes
 */

export interface EventPayLoadMapping {
  getStatic: string;
  test: {
    message: string;
  };
  sendFrameAction: 'CLOSE' | 'MINIMIZE' | 'MAXIMIZE' | 'RESTORE';
  // Add more events here as needed
}
