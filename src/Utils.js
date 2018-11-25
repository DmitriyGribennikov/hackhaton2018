//Selectors imitation
//replace this sheet to real selectors


export const getIncome = (store) => {
    const sessionsById = store.sessionsReducer.entities.sessions;
    const sessionIds = store.sessionsReducer.result.sessions;

    return  sessionIds
        .filter(sessionId => sessionsById[sessionId].paid === true)
        .reduce((acc, sessionId, ) => {
            return acc += sessionsById[sessionId].cost;
        }, 0)

};


export const getAvailablePlacesForParking = (parking) => {
    const totalPlaces = parking.places;
    const availablePlaces = totalPlaces - parking.actualCars.length;
    const percent = totalPlaces / availablePlaces;
    const availablePercentage = 100 / percent;
    const filledPercentage = 100 - availablePercentage;
    return { availablePlaces, totalPlaces, availablePercentage, filledPercentage };
};

export const getAvailablePlacesForAllParkings = (store) => {
    const parkingsById = store.parkingsReducer.entities.parkings;
    const parkingIds = store.parkingsReducer.result.parkings;
    return parkingIds.reduce((acc, parkingId) => {
        const parkingInfo = getAvailablePlacesForParking(parkingsById[parkingId]);
        return {
            availablePlaces: acc.availablePlaces + parkingInfo.availablePlaces,
            totalPlaces: acc.totalPlaces + parkingInfo.totalPlaces,
            availablePercentage: (acc.availablePercentage + parkingInfo.availablePercentage) / 2,
            filledPercentage: (acc.filledPercentage + parkingInfo.filledPercentage) / 2,
        }
    }, {
        availablePlaces: 0,
        totalPlaces: 0,
        availablePercentage: 0,
        filledPercentage: 0,
    });
};
