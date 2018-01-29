import React from 'react';

export const getData = () => {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:49546/api/File/0B2PnCS2RYcqlcE5VX2lVQXNWNDQ")
            .then(response => {
                return response.json();
            })
            .then(res => resolve(res))
            .catch(error => {
                reject(error);
            });
    });
};

export const updateData = (id, updatedObject) => {
    return fetch('http://localhost:3000/items/' + id, {
        method: 'put',
        body: JSON.stringify(updatedObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response)
        .then(response => response.json);

};

export  const getVisibleTiles  =  (shows, param)  => shows.filter((show, index)  =>  show.id.includes(param));
