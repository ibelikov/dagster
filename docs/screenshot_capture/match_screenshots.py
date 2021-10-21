import os

import yaml


def match_screenshots():
    with open("./docs/screenshot_capture/screenshots.yaml", "r") as f:
        screenshot_specs = yaml.load(f)

    for screenshot_spec in screenshot_specs:
        screenshot_path = os.path.join("docs/next/public/images", screenshot_spec["path"])
        assert os.path.exists(
            screenshot_path
        ), f"Screenshot spec expects a file to exist at {screenshot_path}"

        defs_file = screenshot_spec.get("defs_file")
        if defs_file:
            assert os.path.exists(
                defs_file
            ), f"Screenshot spec expects a file to exist at {defs_file}"


if __name__ == "__main__":
    match_screenshots()
