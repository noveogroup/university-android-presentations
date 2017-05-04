## Примеры кода

#### Полезные штуки
* `Alt` + `mouse click` по серой области кода, чтобы увеличить

Сам код находится в нижних слайдах

------

## Примеры кода - большой кусок

    @Getter(AccessLevel.PROTECTED)
    private Patient patient;
    @Getter(AccessLevel.PROTECTED)
    private Session session;
    @Getter(AccessLevel.PROTECTED)
    private Measure measure;

    @Getter
    private State state = State.WAITING;

    protected BaseMeasurementProcessor(final BluetoothProvider bluetoothProvider,
                                       final DatabaseApi databaseApi,
                                       final AppStorageProvider storageProvider,
                                       final CsvConverter csvConverter,
                                       final MainManager mainManager) {
        this.bluetoothProvider = bluetoothProvider;
        this.databaseApi = databaseApi;
        this.storageProvider = storageProvider;
        this.csvConverter = csvConverter;
        this.mainManager = mainManager;
    }

    /**
     * Stop performing the current stimulation.
     */
    public void stopStimulation() {
        stimulationRxHelper.clear();
        state = State.WAITING;
    }

    /**
     * Give an answer of the patient after the stimulation.
     *
     * @param isFelt true if the patient felt the stimulation, false otherwise
     */
    protected void answer(final boolean isFelt) {
        if (measure != null) {
            measure.setFelt(isFelt);
            measure.setSessionId(session.getId());
            session.getMeasures().add(measure);
            // independent actions: saving to the DB and saving to the CSV file
            saveMeasureToDB();
            saveSessionToCsv();
            measure = null;
        }
    }

------

## Примеры кода — маленький кусок

    protected BaseMeasurementProcessor(final BluetoothProvider bluetoothProvider,
                                       final DatabaseApi databaseApi,
                                       final AppStorageProvider storageProvider,
                                       final CsvConverter csvConverter,
                                       final MainManager mainManager) {
        this.bluetoothProvider = bluetoothProvider;
        this.databaseApi = databaseApi;
        this.storageProvider = storageProvider;
        this.csvConverter = csvConverter;
        this.mainManager = mainManager;
    }