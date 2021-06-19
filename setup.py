from setuptools import find_packages, setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="mockseries",
    version="0.1.0",
    packages=find_packages(),
    url="http://catheu.tech/",
    license="All Rights Reserved to Cyril de Catheu.",
    author="Cyril de Catheu",
    author_email="cdecatheu@hey.com",
    description="Easy and intuitive generation of synthetic timeseries.",
    install_requires=[
        "numpy==1.19.5",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    entry_points={
        "console_scripts": [
            "mockseries = mockseries.main:main",
        ],
    },
)
