import os
import shutil

import docs_snippets.guides.dagster.pandas_dagster_types as example_root
import pytest
from dagster.core.errors import DagsterTypeCheckDidNotPass
from docs_snippets.guides.dagster.pandas_dagster_types.job_1 import (
    generate_trip_distribution_plot as job_1,
)
from docs_snippets.guides.dagster.pandas_dagster_types.job_2 import (
    generate_trip_distribution_plot as job_2,
)

EBIKE_TRIPS_PATH = os.path.join(example_root.__path__[0], "ebike_trips.csv")


@pytest.fixture(scope="function")
def in_tmpdir(monkeypatch, tmp_path_factory):
    path = tmp_path_factory.mktemp("ebike_trips")
    shutil.copy(EBIKE_TRIPS_PATH, path)
    monkeypatch.chdir(path)


@pytest.mark.usefixtures("in_tmpdir")
def test_job_1_fails():
    with pytest.raises(ValueError):
        job_1.execute_in_process()


@pytest.mark.usefixtures("in_tmpdir")
def test_job_2_no_clean_fails():
    with pytest.raises(DagsterTypeCheckDidNotPass):
        job_2.execute_in_process()


@pytest.mark.usefixtures("in_tmpdir")
def test_job_2_no_clean_succeeds():
    assert job_2.execute_in_process(
        run_config={"ops": {"load_trips": {"config": {"clean": True}}}}
    ).success
    assert os.path.exists('./trip_lengths.png')
