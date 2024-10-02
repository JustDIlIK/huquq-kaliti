import datetime
from typing import List


async def get_list_data(model, page: int, limit: int, filter=None, includes: List[str] = None):
    return {
        'data': await model.paginate(page=page, limit=limit, filter=filter, includes=includes),
        'total': await model.count(filter=filter),
        'page': page,
        'limit': limit
    }

def convert_to_json_format(data: dict | list):

    if isinstance(data, dict):
        for k in data.keys():
            if isinstance(data[k], (dict, list)):
                data[k] = convert_to_json_format(data[k])

            elif isinstance(data[k], datetime.date):
                data[k] = data[k].strftime("%Y-%m-%d")
            elif isinstance(data[k], datetime.datetime):
                data[k] = data[k].strftime('%Y-%m-%d')

    elif isinstance(data, list):
        for i in range(len(data)):
            if isinstance(data[i], (dict, list)):
                data[i] = convert_to_json_format(data[i])

            elif isinstance(data[i], datetime.date):
                data[i] = data[i].strftime('%Y-%m-%d')
            elif isinstance(data[i], datetime.datetime):
                data[i] = data[i].strftime('%Y-%m-%dT%H:%M:%S')

    return data